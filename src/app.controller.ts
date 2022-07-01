import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('Index')
  public index() {
    // initial props
    return {
      title: 'Next with Nest',
    };
  }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
