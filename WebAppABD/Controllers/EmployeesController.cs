using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAppABD.Entities;
using WebAppABD.Models;

namespace WebAppABD.Controllers
{
    public class EmployeesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("api/Employees/EmployeesList")]
        public IEnumerable<EmployeesCLS> EmployeesList()
        {
            using (NorthWindContext bd = new NorthWindContext())
            {
                List<EmployeesCLS> lista = (from persona in bd.Employees
                                                  select  new EmployeesCLS
                                                  {
                                                      EmployeeID = persona.EmployeeId,
                                                      LastName = persona.LastName,
                                                      FirstName = persona.FirstName,
                                                      FullName = persona.FirstName+""+persona.LastName,
                                                      Title = persona.Title,
                                                      TitleofCortesy = persona.TitleOfCourtesy,
                                                      BirthDate = (DateTime)persona.BirthDate,
                                                      HireTime = (DateTime) persona.HireDate,
                                                      Address = persona.Address,
                                                      City = persona.City,
                                                      Region = persona.Region,
                                                      PostalCode = persona.PostalCode,
                                                      Country = persona.Country,
                                                      HomePhone = persona.HomePhone,
                                                      Extension = persona.Extension,
                                                      ReportsTo = (int) persona.ReportsTo,
                                                      PhotoPath = persona.PhotoPath
                                                      

                                                  }
                                                  
                                                  ).ToList();
                return lista;
            }
        }
    }
}