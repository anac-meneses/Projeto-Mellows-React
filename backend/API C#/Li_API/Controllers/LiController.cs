using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Li_API.Models;

namespace Li_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LiController : ControllerBase
    {
    
private readonly LiDbContext _context;

        public LiController(LiDbContext context) { _context = context; }


        // GET: api/\Li - LISTA DE Li
        [HttpGet]
        public IEnumerable<Li> GetLi()
        {
            return _context.Lis;
        }
        // GET: api/Li/id - LISTA Li POR ID
        [HttpGet("{id}")]
        public IActionResult GetLiPorId(int id)
        {
            Li li = _context.Lis.SingleOrDefault(modelo => modelo.LiId == id);
            if (li == null)
            {
                return NotFound();
            }
            return new ObjectResult(li);
        }

        // CRIA UM NOVO Li      
        [HttpPost]
        public IActionResult CriarLi(Li item)
        {
            if (item == null) { return BadRequest(); }

            _context.Lis.Add(item); _context.SaveChanges(); return new ObjectResult(item);
        }
        // ATUALIZA UM LI EXISTENTE
        [HttpPut("{id}")]
        public IActionResult AtualizaLi(int id, Li item)
        {
            if (id != item.LiId)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            _context.SaveChanges();



            return new NoContentResult();
        }
        // APAGA UM LI POR ID
        [HttpDelete("{id}")]
        public IActionResult DeletaLi(int id)
        {
            var li = _context.Lis.SingleOrDefault(m => m.LiId == id);



            if (li == null)
            {
                return BadRequest();
            }



            _context.Lis.Remove(li);
            _context.SaveChanges();
            return Ok(li);
        }

    }

}
