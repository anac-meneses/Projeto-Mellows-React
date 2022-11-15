using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Li_API.Models
{



    [Table("Li")]
    public class Li 

    {
        [Key]
        public int LiId { get; set; }
        [Required(ErrorMessage = "Informe o ID do Destino")]
        [StringLength(50)]
        public string Nivel { get; set; }
        [Required(ErrorMessage = "Informe o Nivel")]
        public string Nome { get; set; }
        [Required(ErrorMessage = "Informe o Nome")]
        public string Genero { get; set; }



    }
}