import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { writeFileSync } from 'fs';
@Controller('files')
export class FilesController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('photo', {
      dest: './upload',
    }),
  )
  uploadSingle(@UploadedFile() file) {
    console.log(file);
  }

  @Post('upload2')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    writeFileSync('./upload/' + file.originalname, file.buffer)
  }
}
