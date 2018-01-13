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
        length:20, 
        })
    UserName:string;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    Birth:Date;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:20, 
        })
    IDCardNo:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:20, 
        })
    Phone:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50, 
        })
    Career:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:100, 
        })
    Address:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:100, 
        })
    Email:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:50, 
        })
    LineID:string;
        

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
        

    @Column("nvarchar",{ 
        nullable:true,
        length:20, 
        })
    ContactUser:string;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:20, 
        })
    ContactUserPhone:string;
        
}