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

 Date: 03/01/2018 23:08:05
*/


-- ----------------------------
-- Table structure for UserDetail
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[UserDetail]') AND type IN ('U'))
	DROP TABLE [dbo].[UserDetail]
GO

CREATE TABLE [dbo].[UserDetail] (
  [UserID] int  IDENTITY(1,1) NOT NULL,
  [RoomID] int  NULL,
  [UserName] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [Birth] datetime  NULL,
  [IDCardNo] nvarchar(10) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [Phone] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [ContacterPhone] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [Career] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [Address] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [Email] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [LineID] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [CreateUser] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [CreateDate] datetime  NULL,
  [ModifyUser] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [ModifyDate] datetime  NULL
)
GO

ALTER TABLE [dbo].[UserDetail] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Indexes structure for table UserDetail
-- ----------------------------
CREATE NONCLUSTERED INDEX [RentDetail_RoomID]
ON [dbo].[UserDetail] (
  [RoomID] ASC
)
GO


-- ----------------------------
-- Primary Key structure for table UserDetail
-- ----------------------------
ALTER TABLE [dbo].[UserDetail] ADD CONSTRAINT [PK_UserDetail] PRIMARY KEY CLUSTERED ([UserID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO

