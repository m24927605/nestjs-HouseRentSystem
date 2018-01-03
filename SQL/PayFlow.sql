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

 Date: 03/01/2018 23:07:48
*/


-- ----------------------------
-- Table structure for PayFlow
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[PayFlow]') AND type IN ('U'))
	DROP TABLE [dbo].[PayFlow]
GO

CREATE TABLE [dbo].[PayFlow] (
  [ID] int  IDENTITY(1,1) NOT NULL,
  [UserID] int  NULL,
  [PowerQty] float(53)  NULL,
  [Payment] decimal(18)  NULL,
  [TimeOfPayment] datetime  NULL,
  [CreateUser] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [CreateDate] datetime  NULL,
  [ModifyUser] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [ModifyDate] datetime  NULL
)
GO

ALTER TABLE [dbo].[PayFlow] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Indexes structure for table PayFlow
-- ----------------------------
CREATE NONCLUSTERED INDEX [UserDetail_UserID]
ON [dbo].[PayFlow] (
  [UserID] ASC
)
GO


-- ----------------------------
-- Primary Key structure for table PayFlow
-- ----------------------------
ALTER TABLE [dbo].[PayFlow] ADD CONSTRAINT [PK_PayFlow] PRIMARY KEY CLUSTERED ([ID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO

