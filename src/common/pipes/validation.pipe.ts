import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

import { ZodType } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: ZodType) {}

  async transform(value: unknown) {
    const result = await this.schema.safeParseAsync(value);

    if (!result.success) {
      const errors: Record<string, string[]> = {};

      for (const issue of result.error.issues) {
        const field = issue.path.join('.') || 'general';

        errors[field] ??= [];
        errors[field].push(issue.message);
      }

      throw new BadRequestException({
        statusCode: 400,
        message: 'Validation failed',
        errors,
      });
    }

    return result.data;
  }
}
