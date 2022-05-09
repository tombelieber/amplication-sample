import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PaymentRecordServiceBase } from "./base/paymentRecord.service.base";

@Injectable()
export class PaymentRecordService extends PaymentRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
