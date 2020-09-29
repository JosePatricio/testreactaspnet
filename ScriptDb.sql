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


INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan1','Enseñanza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan2','Enseñanza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan3','Enseñanza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan4','Enseñanza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan5','Enseñanza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan6','Enseñanza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan7','Enseñanza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan8','Enseñanza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan9','Enseñanza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan10','Enseñanza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan11','Enseñanza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan12','Enseñanza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan13','Enseñanza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);
INSERT INTO [dbo].[tb_libro]([nombre],[descripcion],[autor],[fecha],[ejemplares],[costo])VALUES('El libro de Don Juan14','Enseñanza de Don Juan','Carlos Castaneda','1968-09-28 15:51:43.607',2, 49.5555);






