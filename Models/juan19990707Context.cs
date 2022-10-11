using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace prueba_tecnica.Models
{
    public partial class juan19990707Context : DbContext
    {

        public juan19990707Context(DbContextOptions<juan19990707Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Image> Images { get; set; } = null!;
        public virtual DbSet<Tresource> Tresources { get; set; } = null!;
        public virtual DbSet<TresourceType> TresourceTypes { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Image>(entity =>
            {
                entity.ToTable("images");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.Likes)
                    .HasColumnName("likes")
                    .HasDefaultValueSql("'0'");

                entity.Property(e => e.Src)
                    .HasColumnName("src");           
            });

            modelBuilder.Entity<Tresource>(entity =>
            {
                entity.HasKey(e => e.IdResource)
                    .HasName("PRIMARY");

                entity.ToTable("tresource");

                entity.HasIndex(e => e.IdResourceType, "idResourceType");

                entity.Property(e => e.IdResource).HasColumnName("idResource");

                entity.Property(e => e.Created)
                    .HasColumnType("datetime")
                    .HasColumnName("created");

                entity.Property(e => e.Descrip)
                    .HasMaxLength(200)
                    .HasColumnName("descrip");

                entity.Property(e => e.IdResourceType).HasColumnName("idResourceType");

                entity.HasOne(d => d.IdResourceTypeNavigation)
                    .WithMany(p => p.Tresources)
                    .HasForeignKey(d => d.IdResourceType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tresource_ibfk_1");
            });

            modelBuilder.Entity<TresourceType>(entity =>
            {
                entity.HasKey(e => e.IdResourceType)
                    .HasName("PRIMARY");

                entity.ToTable("tresource_type");

                entity.Property(e => e.IdResourceType).HasColumnName("idResourceType");

                entity.Property(e => e.Created)
                    .HasColumnType("datetime")
                    .HasColumnName("created");

                entity.Property(e => e.Descrip)
                    .HasMaxLength(200)
                    .HasColumnName("descrip");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
