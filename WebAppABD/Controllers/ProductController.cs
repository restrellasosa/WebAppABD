using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAppABD.Entities;
using WebAppABD.Models;

namespace WebAppABD.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("api/Product/ProductList")]
        public IEnumerable<ProductsCLS> ProductList()

        {
            using (NorthWindContext bd = new NorthWindContext())

            {


                List<ProductsCLS> lista = (from producto in bd.Products
                                               join categorias in bd.Categories on
                  producto.CategoryId equals categorias.CategoryId
                                           where producto.Discontinued == false
                                           select new ProductsCLS
                                               {
                                                  Iidproducto = producto.ProductId,
                                                  nombre = producto.ProductName,
                                                  precio = (decimal)producto.UnitPrice,
                                                  stock = (int)producto.UnitsInStock,
                                                  nombreCategoria = categorias.CategoryName
                                               }
                                                  
                                              
                                ).ToList();
                return lista;
            }
    
        }


        [HttpGet]
        [Route("api/Product/FilterProductListByName/{nombre}")]
        public IEnumerable<ProductsCLS> FilterProductListbyName(string nombre)

        {
            using (NorthWindContext bd = new NorthWindContext())

            {


                List<ProductsCLS> lista = (from producto in bd.Products
                                           join categorias in bd.Categories on
              producto.CategoryId equals categorias.CategoryId
                                           where producto.Discontinued == false 
                                           && producto.ProductName.ToLower().Contains(nombre.ToLower())
                                           select new ProductsCLS
                                           {
                                               Iidproducto = producto.ProductId,
                                               nombre = producto.ProductName,
                                               precio = (decimal)producto.UnitPrice,
                                               stock = (int)producto.UnitsInStock,
                                               nombreCategoria = categorias.CategoryName
                                           }


                                ).ToList();
                return lista;
            }

        }



        [HttpGet]
        [Route("api/Product/FilterProductListbyCategory/{idCategoria}")]
        public IEnumerable<ProductsCLS> FilterProductListbyCategory(int idCategoria)

        {
            using (NorthWindContext bd = new NorthWindContext())

            {


                List<ProductsCLS> lista = (from producto in bd.Products
                                           join categorias in bd.Categories on
              producto.CategoryId equals categorias.CategoryId
                                           where producto.Discontinued == false
                                           && producto.CategoryId == idCategoria
                                           select new ProductsCLS
                                           {
                                               idproducto = producto.ProductId,
                                               nombre = producto.ProductName,
                                               precio = (decimal)producto.UnitPrice,
                                               stock = (int)producto.UnitsInStock,
                                               nombreCategoria = categorias.CategoryName
                                           }


                                ).ToList();
                return lista;
            }

        }
    }
}