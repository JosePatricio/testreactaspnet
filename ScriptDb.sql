create database ejercicio1db;
use ejercicio1db;


	
CREATE TABLE tb_libro (
    id_libro INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    descripcion VARCHAR(300) NOT NULL,
	autor VARCHAR(150) NOT NULL,
	fecha DATE NOT NULL,
	ejemplares INT  NOT NULL,
	costo NUMERIC(15, 4)  NOT NULL,
    );


INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan1','Ense�anza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan2','Ense�anza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan3','Ense�anza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan4','Ense�anza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan5','Ense�anza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan6','Ense�anza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan7','Ense�anza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan8','Ense�anza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan9','Ense�anza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan10','Ense�anza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan11','Ense�anza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan12','Ense�anza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan13','Ense�anza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan14','Ense�anza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);






