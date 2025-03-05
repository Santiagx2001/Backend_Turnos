-- CreateTable
CREATE TABLE `Formularios` (
    `IDUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombres` VARCHAR(191) NOT NULL,
    `Apellidos` VARCHAR(191) NOT NULL,
    `TipoDoc_id` INTEGER NOT NULL,
    `NumDoc` BIGINT NOT NULL,
    `FechaNacimiento` DATETIME(3) NOT NULL,
    `Localidad_id` INTEGER NOT NULL,
    `NumTelefono` BIGINT NOT NULL,

    PRIMARY KEY (`IDUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoDoc` (
    `IDTipoDoc` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NULL,

    PRIMARY KEY (`IDTipoDoc`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Localidad` (
    `IDLocalidad` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NULL,

    PRIMARY KEY (`IDLocalidad`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Formularios` ADD CONSTRAINT `Formularios_TipoDoc_id_fkey` FOREIGN KEY (`TipoDoc_id`) REFERENCES `TipoDoc`(`IDTipoDoc`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formularios` ADD CONSTRAINT `Formularios_Localidad_id_fkey` FOREIGN KEY (`Localidad_id`) REFERENCES `Localidad`(`IDLocalidad`) ON DELETE RESTRICT ON UPDATE CASCADE;
