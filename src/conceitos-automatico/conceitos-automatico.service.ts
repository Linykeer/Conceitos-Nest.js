import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutomaticoService {
  retornoController(): string {
    return 'Retornou ao controller o service';
  }
}
