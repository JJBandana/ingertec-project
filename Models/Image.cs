using System;
using System.Collections.Generic;

namespace prueba_tecnica.Models
{
    public partial class Image
    {
        public int Id { get; set; }
        public int? Likes { get; set; }
        public string Src { get; set; }
    }
}
