import {
  Injectable,
  PipeTransform,
  UnauthorizedException
} from '@nestjs/common'
import { InAuthPostPublic } from '../interfaces/auth-public'
import { defaultMessageUnauthorized } from 'src/services/messages'
import { IS_PUBLIC_KEY } from 'src/services/is-public'

@Injectable()
export class AuthValidatePublicPipe implements PipeTransform {
  transform(value: InAuthPostPublic) {
    if (!value.publicKey || !value.ip || value.publicKey !== IS_PUBLIC_KEY) {
      throw new UnauthorizedException(defaultMessageUnauthorized)
    }

    return value
  }
}
