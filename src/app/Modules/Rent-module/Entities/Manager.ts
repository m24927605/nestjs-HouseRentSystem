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
        length:20, 
        })
    Name:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:100, 
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
        length:20, 
        })
    CreateUser:string;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    ModifyDate:Date;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:20, 
        })
    ModifyUser:string;
        
}