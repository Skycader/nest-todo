import {
  Controller,
  Get,
  NotFoundException,
  Post,
  Res,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream, writeFileSync } from 'fs';
import { join } from 'path';
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

  @Get()
  getFile(): StreamableFile {
    console.log(join(process.cwd(), 'package.json'))
    const file = createReadStream(join(process.cwd(), 'package.json'));

    if (Math.random() > 0.5) {
      return new StreamableFile(file);
    } else {
      throw new NotFoundException('404')
    }
  }
}
