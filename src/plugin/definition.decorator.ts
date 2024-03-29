import { FunctionDefinition } from './types';

export const definitions: FunctionDefinition[] = [];

export function Definition(definition: Omit<FunctionDefinition, 'name'>) {
  return function actualDecorator(
    targetPrototype: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    const className = targetPrototype.constructor.name;
    definitions.push({
      ...definition,
      name: className + '-' + propertyKey,
    });
    return originalMethod;
  };
}
