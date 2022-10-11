using System;
using System.Collections.Generic;

namespace prueba_tecnica.Models
{
    public partial class TresourceType
    {
        public TresourceType()
        {
            Tresources = new HashSet<Tresource>();
        }

        public int IdResourceType { get; set; }
        public DateTime Created { get; set; }
        public string Descrip { get; set; } = null!;

        public virtual ICollection<Tresource> Tresources { get; set; }
    }
}
