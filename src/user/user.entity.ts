// user.entity.ts

import { AddressEntity } from 'src/address/entities/address.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'anonymous' })
  name: string;

  @Column({ default: '' })
  avatar: string;

  @Column({ default: '' })
  userId: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  signature: string;

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  group: string;

  @Column({ default: 0 })
  notifyCount: number;

  @Column({ default: 0 })
  unreadCount: number;

  @Column({ default: '' })
  country: string;

  @Column({ default: '' })
  access: string;

  @Column({ default: '' })
  address: string;

  @Column({ nullable: true, default: '' })
  phone?: string;

  @Column({ default: '' })
  openid: string;

  @Column({ default: '' })
  username: string;

  @Column({ default: '' })
  password: string;

  @Column({ type: 'text' })
  private _tags: string;

  get tags(): { key: string; label: string }[] {
    return JSON.parse(this._tags);
  }

  set tags(value: { key: string; label: string }[]) {
    this._tags = JSON.stringify(value);
  }

  @Column({ type: 'text' })
  private _geographic: string;

  get geographic(): {
    province: { label: string; key: string };
    city: { label: string; key: string };
  } {
    return JSON.parse(this._geographic);
  }

  set geographic(value: {
    province: { label: string; key: string };
    city: { label: string; key: string };
  }) {
    this._geographic = JSON.stringify(value);
  }

  @OneToMany(() => AddressEntity, (address) => address.user)
  addresses?: AddressEntity[];
}
