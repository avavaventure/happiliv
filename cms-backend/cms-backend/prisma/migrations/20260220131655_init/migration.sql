-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `galleimagetag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `show` ENUM('VISIBLE', 'HIDDEN') NOT NULL DEFAULT 'VISIBLE',
    `status` ENUM('ACTIVE', 'DELETED') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `galleimagetag_name_key`(`name`),
    INDEX `galleimagetag_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `galleryimage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `tagId` INTEGER NOT NULL,
    `link` VARCHAR(191) NULL,
    `show` ENUM('VISIBLE', 'HIDDEN') NOT NULL DEFAULT 'VISIBLE',
    `status` ENUM('ACTIVE', 'DELETED') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `galleryimage_status_idx`(`status`),
    INDEX `galleryimage_show_idx`(`show`),
    INDEX `galleryimage_tagId_idx`(`tagId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blogs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `meta_title` VARCHAR(191) NULL,
    `meta_desc` LONGTEXT NULL,
    `meta_keyword` VARCHAR(191) NULL,
    `slug` VARCHAR(191) NOT NULL,
    `og_title` VARCHAR(191) NULL,
    `og_desc` LONGTEXT NULL,
    `og_image` VARCHAR(191) NULL,
    `blog_banner_img` VARCHAR(191) NULL,
    `blog_banner_img_alt` VARCHAR(191) NULL,
    `blog_banner_title` VARCHAR(191) NULL,
    `blog_name` VARCHAR(191) NOT NULL,
    `blog_desc` LONGTEXT NOT NULL,
    `blog_desc1` LONGTEXT NULL,
    `blog_desc2` LONGTEXT NULL,
    `blog_main_img` VARCHAR(191) NULL,
    `blog_main_img_alt` VARCHAR(191) NULL,
    `blog_main_img2` VARCHAR(191) NULL,
    `blog_main_img_alt2` VARCHAR(191) NULL,
    `call_to_action` VARCHAR(191) NULL,
    `show` ENUM('VISIBLE', 'HIDDEN') NOT NULL DEFAULT 'VISIBLE',
    `status` ENUM('ACTIVE', 'DELETED') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `blogs_slug_key`(`slug`),
    INDEX `blogs_slug_idx`(`slug`),
    INDEX `blogs_status_idx`(`status`),
    INDEX `blogs_show_idx`(`show`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `galleryimage` ADD CONSTRAINT `galleryimage_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `galleimagetag`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
