using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using prueba_tecnica.Models;

namespace prueba_tecnica.Controllers
{
    [Route("api/Image")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly juan19990707Context _dbcontext;

        public ImageController(juan19990707Context dbcontext)
        {
            _dbcontext = dbcontext;
        }

        [HttpGet]
        [Route("Likes")]
        public async Task<IActionResult> Likes()
        {
            List<Image> lista = await _dbcontext.Images.ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        // GET api/<ImageController>/5
        [HttpGet("Edit")]
        public async Task<IActionResult> Edit([FromBody] Image request)
        {
            _dbcontext.Images.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        // POST api/<ImageController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ImageController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ImageController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
