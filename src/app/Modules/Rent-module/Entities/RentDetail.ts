import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";


@Entity('RentDetail')
export class RentDetail {


    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true, 
        })
    RoomID:number;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:20, 
        })
    RoomNo:string;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    RentStartDate:Date;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    RentEndDate:Date;
        

    @Column("decimal",{ 
        nullable:true,
        precision:18,
        scale:0, 
        })
    PowerUnitCost:number;
        

    @Column("decimal",{ 
        nullable:true,
        precision:18,
        scale:0, 
        })
    RentMonthly:number;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    EnterDate:Date;
        

    @Column("datetime",{ 
        nullable:true, 
        })
    LeaveDate:Date;
        

    @Column("nchar",{ 
        nullable:true,
        length:1, 
        })
    Status:string;
        

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