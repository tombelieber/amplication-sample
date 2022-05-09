import { Module } from "@nestjs/common";
import { PaymentRecordModuleBase } from "./base/paymentRecord.module.base";
import { PaymentRecordService } from "./paymentRecord.service";
import { PaymentRecordController } from "./paymentRecord.controller";
import { PaymentRecordResolver } from "./paymentRecord.resolver";

@Module({
  imports: [PaymentRecordModuleBase],
  controllers: [PaymentRecordController],
  providers: [PaymentRecordService, PaymentRecordResolver],
  exports: [PaymentRecordService],
})
export class PaymentRecordModule {}
