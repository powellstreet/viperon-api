import { DocumentBuilder } from '@nestjs/swagger';

export const createSwaggerConfig = () => {
  return new DocumentBuilder()
    .setTitle('Viperon API')
    .setDescription('Viperon API description')
    .setVersion('1.0')
    .build();
};
