/* eslint-disable no-mixed-spaces-and-tabs */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Tareas } from './Tareas';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('uuid')
    	id_usuario: string;

    @Column({ length: 100, unique:true})
    	username: string;

    @Column({ length: 2000 })
    	password: string;

    @Column({ length: 50 })
    	rol: string;

    @OneToMany(()=>Tareas, (tareas)=> tareas.usuario)
    	tareas:Tareas[];
}