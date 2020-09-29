using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

using System.Data;
using System.Data.Entity;
using System.Web;
using RestApi;
using System.Data.Entity.Migrations;



using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.Configuration;
using System.Data.SqlClient;
using System.Runtime.Serialization;
using System.Text;
using System.Web.Http.Cors;

namespace RestApi.Controllers
{
    public class ValuesController : ApiController
    {

        private ejercicio1dbEntities db = new ejercicio1dbEntities();

        // GET api/values
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<tb_libro> Get()
        {
            return db.tb_libro.ToList();
        }

        // GET api/values/5
        public tb_libro Get(int id)
        {

            tb_libro tb_libro = db.tb_libro.Find(id);
            
            if (tb_libro == null)
            {
                return null;
            }

            return tb_libro;
        }

        // POST api/values
        public void Post([FromBody] tb_libro value)
        {

            db.tb_libro.Add(value);
            db.SaveChanges();

        }

        // PUT api/values
        public void Put([FromBody] tb_libro value)
        {
            db.tb_libro.AddOrUpdate(value);
            db.SaveChanges();
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            tb_libro libro = db.tb_libro
            
       .Where(a => a.id_libro == id)
       .FirstOrDefault();

            db.tb_libro.Remove(libro);
            db.SaveChanges();
        }
    }
}
