import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";


@Entity('UserDetail')
@Index("RentDetail_RoomID",["RoomID",])
export class UserDetail {


    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true, 
        })
    UserID:number;
        

    @Column("int",{ 
        nullable:true, 
        })
    RoomID:number;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255, 
        })
    UserName:string;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    Birth:Date;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:10, 
        })
    IDCardNo:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255, 
        })
    Phone:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255, 
        })
    ContacterPhone:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255, 
        })
    Career:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255, 
        })
    Address:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255, 
        })
    Email:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255, 
        })
    LineID:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255, 
        })
    CreateUser:string;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    CreateDate:Date;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:255, 
        })
    ModifyUser:string;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    ModifyDate:Date;
        
}