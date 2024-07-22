import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  PipeTransform
} from '@nestjs/common'

export class ValidateParamsPipes implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new HttpException(
        `O parâmetro ${metadata.type} deve ser informado.`,
        HttpStatus.BAD_REQUEST
      )
    }
    return value
  }
}
