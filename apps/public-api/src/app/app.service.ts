import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getData(): { readonly message: string } {
    return { message: 'Welcome to public-api!' };
  }
}
