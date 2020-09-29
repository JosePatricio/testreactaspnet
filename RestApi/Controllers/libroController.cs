using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using RestApi;

namespace RestApi.Controllers
{
    public class libroController : Controller
    {
        private ejercicio1dbEntities db = new ejercicio1dbEntities();

        // GET: libro
        public ActionResult Index()
        {
            return View(db.tb_libro.ToList());
        }

        // GET: libro/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            tb_libro tb_libro = db.tb_libro.Find(id);
            if (tb_libro == null)
            {
                return HttpNotFound();
            }
            return View(tb_libro);
        }

        // GET: libro/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: libro/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id_libro,nombre,descripcion,autor,fecha,ejemplares,costo")] tb_libro tb_libro)
        {
            if (ModelState.IsValid)
            {
                db.tb_libro.Add(tb_libro);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(tb_libro);
        }

        // GET: libro/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            tb_libro tb_libro = db.tb_libro.Find(id);
            if (tb_libro == null)
            {
                return HttpNotFound();
            }
            return View(tb_libro);
        }

        // POST: libro/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id_libro,nombre,descripcion,autor,fecha,ejemplares,costo")] tb_libro tb_libro)
        {
            if (ModelState.IsValid)
            {
                db.Entry(tb_libro).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(tb_libro);
        }

        // GET: libro/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            tb_libro tb_libro = db.tb_libro.Find(id);
            if (tb_libro == null)
            {
                return HttpNotFound();
            }
            return View(tb_libro);
        }

        // POST: libro/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            tb_libro tb_libro = db.tb_libro.Find(id);
            db.tb_libro.Remove(tb_libro);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
