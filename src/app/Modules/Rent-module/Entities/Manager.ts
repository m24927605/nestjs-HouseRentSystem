import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";


@Entity('Manager')
export class Manager {


    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true, 
        })
    BackerID:number;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255, 
        })
    Name:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255, 
        })
    Account:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255, 
        })
    Password:string;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    CreateDate:Date;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255, 
        })
    CreateUser:string;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    ModifyDate:Date;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255, 
        })
    ModifyUser:string;
        
}