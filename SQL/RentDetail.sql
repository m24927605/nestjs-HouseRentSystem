/*
 Navicat SQL Server Data Transfer

 Source Server         : SQLEXPRESS
 Source Server Type    : SQL Server
 Source Server Version : 14001000
 Source Host           : LAPTOP-OFFOA9A1\SQLEXPRESS:1433
 Source Catalog        : Rent
 Source Schema         : dbo

 Target Server Type    : SQL Server
 Target Server Version : 14001000
 File Encoding         : 65001

 Date: 03/01/2018 23:07:57
*/


-- ----------------------------
-- Table structure for RentDetail
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[RentDetail]') AND type IN ('U'))
	DROP TABLE [dbo].[RentDetail]
GO

CREATE TABLE [dbo].[RentDetail] (
  [RoomID] int  IDENTITY(1,1) NOT NULL,
  [RoomNo] int  NULL,
  [RentStartDate] datetime  NULL,
  [RentEndDate] datetime  NULL,
  [PowerUnitCost] decimal(18)  NULL,
  [RentMonthly] decimal(18)  NULL,
  [EnterDate] datetime  NULL,
  [LeaveDate] datetime  NULL,
  [Status] char(1) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [CreateUser] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [CreateDate] datetime  NULL,
  [ModifyUser] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [ModifyDate] datetime  NULL
)
GO

ALTER TABLE [dbo].[RentDetail] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Primary Key structure for table RentDetail
-- ----------------------------
ALTER TABLE [dbo].[RentDetail] ADD CONSTRAINT [PK_RentDetail] PRIMARY KEY CLUSTERED ([RoomID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO

