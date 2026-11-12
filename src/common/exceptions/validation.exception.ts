import { BadRequestException } from '@nestjs/common';

import { ValidationError } from 'class-validator';

export function validationExceptionFactory(
  errors: ValidationError[],
): BadRequestException {
  const groupedErrors: Record<string, string[]> = {};

  const flattenErrors = (
    validationErrors: ValidationError[],
    parentPath = '',
  ): void => {
    for (const error of validationErrors) {
      const property = parentPath
        ? `${parentPath}.${error.property}`
        : error.property;

      // Ambil semua pesan validasi dari property
      if (error.constraints) {
        groupedErrors[property] = [
          ...(groupedErrors[property] ?? []),
          ...Object.values(error.constraints),
        ];
      }

      // Rekursif untuk nested validation
      if (error.children?.length) {
        flattenErrors(error.children, property);
      }
    }
  };
  flattenErrors(errors);
  return new BadRequestException({
    statusCode: 400,
    message: 'Validation failed',
    errors: groupedErrors,
  });
}
