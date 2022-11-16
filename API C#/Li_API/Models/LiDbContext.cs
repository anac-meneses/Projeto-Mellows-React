using Microsoft.EntityFrameworkCore;

namespace Li_API.Models
{
    public class LiDbContext : DbContext
    {
        public LiDbContext(DbContextOptions<LiDbContext> options)
          : base(options)
        { }



        public DbSet<Li> Lis { get; set; }



    }
}