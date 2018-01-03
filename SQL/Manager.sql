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

 Date: 03/01/2018 23:07:28
*/


-- ----------------------------
-- Table structure for Manager
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Manager]') AND type IN ('U'))
	DROP TABLE [dbo].[Manager]
GO

CREATE TABLE [dbo].[Manager] (
  [BackerID] int  IDENTITY(1,1) NOT NULL,
  [Name] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [Account] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [Password] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [CreateDate] datetime  NULL,
  [CreateUser] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL,
  [ModifyDate] datetime  NULL,
  [ModifyUser] nvarchar(255) COLLATE Chinese_Taiwan_Stroke_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[Manager] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Primary Key structure for table Manager
-- ----------------------------
ALTER TABLE [dbo].[Manager] ADD CONSTRAINT [PK_Manager] PRIMARY KEY CLUSTERED ([BackerID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO

