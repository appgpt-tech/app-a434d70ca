//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teamsSport')
export class teamsSportEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  teamId: number;

  @Column('text', { nullable: true })
  teamName: string;

  @Column('text', { nullable: true })
  teamLogo: string;
}
