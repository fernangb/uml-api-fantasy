import { Get, Controller } from '@nestjs/common';
import { OwnerService } from '../services/owner.service';

@Controller('owners')
export class OwnerController {
  private ownerService: OwnerService;

  @Get()
  async findAll() {
    return this.ownerService.findAll();
  }
}
