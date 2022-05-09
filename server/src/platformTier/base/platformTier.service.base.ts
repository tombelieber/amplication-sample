/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, PlatformTier, Room, PlatformProvider } from "@prisma/client";

export class PlatformTierServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PlatformTierFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PlatformTierFindManyArgs>
  ): Promise<number> {
    return this.prisma.platformTier.count(args);
  }

  async findMany<T extends Prisma.PlatformTierFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PlatformTierFindManyArgs>
  ): Promise<PlatformTier[]> {
    return this.prisma.platformTier.findMany(args);
  }
  async findOne<T extends Prisma.PlatformTierFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PlatformTierFindUniqueArgs>
  ): Promise<PlatformTier | null> {
    return this.prisma.platformTier.findUnique(args);
  }
  async create<T extends Prisma.PlatformTierCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PlatformTierCreateArgs>
  ): Promise<PlatformTier> {
    return this.prisma.platformTier.create<T>(args);
  }
  async update<T extends Prisma.PlatformTierUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PlatformTierUpdateArgs>
  ): Promise<PlatformTier> {
    return this.prisma.platformTier.update<T>(args);
  }
  async delete<T extends Prisma.PlatformTierDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PlatformTierDeleteArgs>
  ): Promise<PlatformTier> {
    return this.prisma.platformTier.delete(args);
  }

  async findRooms(
    parentId: string,
    args: Prisma.RoomFindManyArgs
  ): Promise<Room[]> {
    return this.prisma.platformTier
      .findUnique({
        where: { id: parentId },
      })
      .rooms(args);
  }

  async getProvider(parentId: string): Promise<PlatformProvider | null> {
    return this.prisma.platformTier
      .findUnique({
        where: { id: parentId },
      })
      .provider();
  }
}