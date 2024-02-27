import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "./Usuario";

@Entity()
export class Tareas {
    @PrimaryGeneratedColumn('uuid')
    id_tarea: string;

    @Column({length:900})
    tarea: string;

    @Column({default:false})
    estado: boolean;

    @Column({type:'timestamp'})
    fechaFinalizar: Date;

    @CreateDateColumn({type:'timestamp'})
    createdAt: string;

    @ManyToOne(()=>Usuario, (usuario)=>usuario.tareas, {onDelete:'CASCADE'})
    @JoinColumn({name:'idUsuario'})
    usuario:Usuario;
}