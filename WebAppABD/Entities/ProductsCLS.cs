using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppABD.Entities
{
    public class ProductsCLS
    {
        internal int idproducto;

        public int Iidproducto{ get; set; }
        public string nombre { get; set; }
        public decimal precio { get; set; }
        public int stock { get; set; }
        public string nombreCategoria { get; set; }

    }
}
