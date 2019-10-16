using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAppABD.Entities;
using WebAppABD.Models;

namespace WebAppABD.Controllers
{
    public class CategoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("api/Category/CategoryList")]
        public IEnumerable<CategoryCLS> CategoryList()
        {
            using(var bd = new NorthWindContext())
            {
                IEnumerable<CategoryCLS> CategoryList = (from categoria in bd.Categories
                                                         where categoria.Discontinued==true
                                                         select new CategoryCLS
                                                         {
                                                             iidCategoria = categoria.CategoryId,
                                                             nombre = categoria.CategoryName,
                                                             Descripcion = categoria.Description
                                                         }).ToList();

                return CategoryList;
            }

        }


    }
}