import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";


@Entity('PayFlow')
@Index("UserDetail_UserID",["UserID",])
export class PayFlow {


    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true, 
        })
    ID:number;
        

    @Column("int",{ 
        nullable:true, 
        })
    UserID:number;
        

    @Column("float",{ 
        nullable:true,
        precision:53, 
        })
    PowerQty:number;
        

    @Column("decimal",{ 
        nullable:true,
        precision:18,
        scale:0, 
        })
    Payment:number;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    TimeOfPayment:Date;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:20, 
        })
    CreateUser:string;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    CreateDate:Date;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:20, 
        })
    ModifyUser:string;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    ModifyDate:Date;
        
}