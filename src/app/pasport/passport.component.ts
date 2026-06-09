import { Component, computed, input } from '@angular/core';
import {
  LocationRecord,
  MaterialSuppliersLocationRecord,
  PassportStatus,
  PieceCategory,
  Season,
} from './passport.models';
import { findPassportMock } from './passport.mock';

@Component({
  selector: 'app-passport',
  imports: [],
  templateUrl: './passport.component.html',
  styleUrl: './passport.component.css',
  standalone: true,
})
export class Passport {
  readonly uuid = input<string>('');
  readonly passport = computed(() => findPassportMock(this.uuid()));

  formattedHash = computed(() => {
    const hash = this.passport()!.piece.blockchain.hash;
    if (!hash) return '-';
    return `${hash.slice(0, 6)}...${hash.slice(-4)}`;
  });
  protected readonly materials = computed(() =>
    this.passport()?.piece.materials.map((material) => material.name),
  );

  protected readonly materialsOrigin = computed(() => {
    const uniqueCountries = new Map<string, MaterialSuppliersLocationRecord>([]);
    this.passport()?.piece.materials.forEach((material) => {
      material.suppliers.forEach((supplier) => {
        if (!uniqueCountries.has(supplier.country)) uniqueCountries.set(supplier.country, supplier);
      });
    });
    return Array.from(uniqueCountries.values());
  });

  formatPieceName(value?: string): string {
    if (!value) {
      return '—';
    }
    return value
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  get statusLabel(): string | undefined {
    if (!this.passport()) return;
    const labels: Record<PassportStatus, string> = {
      ACTIVE: 'Verificado en Cadena',
      PENDING: 'Verificación Pendiente',
      INACTIVE: 'Pasaporte Inactivo',
    };

    return labels[this.passport()!.piece.passport_status];
  }

  formatLocation(location?: LocationRecord): string {
    if (!location) {
      return '—';
    }

    const parts = [location.country, location.city].filter(Boolean);
    return parts.length ? parts.join(' · ') : '—';
  }

  formatDate(value?: string): string {
    if (!value) {
      return '—';
    }
    return new Intl.DateTimeFormat('es-ES', {
      month: 'long',
      year: 'numeric',
    }).format(new Date(value));
  }

  formatQuantity(value: number): string {
    if (!value) {
      return '—';
    }

    return `${value} ${value === 1 ? 'unidad' : 'unidades'}`;
  }

  formatCategories(value: PieceCategory[]): string {
    const labels: Record<PieceCategory, string> = {
      BAG: 'Bolso',
      CLOTHING: 'Ropa',
      GARMENT: 'Prenda',
      ACCESSORY: 'Accesorio',
      FOOTWEAR: 'Calzado',
      JEWELRY: 'Joyería',
    };

    return value.map((val) => labels[val] ?? val).join(' - ');
  }

  formatSeason(value: Season[]): string {
    const labels: Record<Season, string> = {
      AUTUMN: 'Otoño',
      SPRING_SUMMER: 'Primavera / Verano',
      WINTER: 'Invierno',
      COCKTAIL: 'Cóctel',
      CRUISE: 'Crucero',
    };

    return value.map((val) => labels[val]).join(' - ');
  }
}
