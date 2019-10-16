
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppABD.Entities
{
    public class EmployeesCLS
    {
        public int EmployeeID { get; set; }
        
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string FullName { get; set; }
        public string Title { get; set; }
        public string TitleofCortesy { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime HireTime { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string HomePhone { get; set; }
        public string Extension { get; set; }
        public bool  Photo { get; set; }
        public string notes { get; set; }
        public int ReportsTo { get; set; }
        public string PhotoPath { get; set; }

    }
}
