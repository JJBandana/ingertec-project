using System;
using System.Collections.Generic;

namespace prueba_tecnica.Models
{
    public partial class Tresource
    {
        public int IdResource { get; set; }
        public DateTime Created { get; set; }
        public string Descrip { get; set; } = null!;
        public int IdResourceType { get; set; }

        public virtual TresourceType IdResourceTypeNavigation { get; set; } = null!;
    }
}
