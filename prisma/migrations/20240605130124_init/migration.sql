-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Explicit" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(20) NOT NULL,

    CONSTRAINT "Explicit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gender" (
    "id" SERIAL NOT NULL,
    "gender" VARCHAR(20) NOT NULL,

    CONSTRAINT "Gender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "genre" VARCHAR(30) NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GenreStory" (
    "genreId" INTEGER NOT NULL,
    "storyId" INTEGER NOT NULL,

    CONSTRAINT "GenreStory_pkey" PRIMARY KEY ("genreId","storyId")
);

-- CreateTable
CREATE TABLE "Identity" (
    "id" SERIAL NOT NULL,
    "romanticId" INTEGER NOT NULL,
    "sexualityId" INTEGER NOT NULL,
    "genderId" INTEGER NOT NULL,
    "explicitId" INTEGER NOT NULL,
    "prominanceId" INTEGER NOT NULL,

    CONSTRAINT "Identity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IdentityStory" (
    "identityId" INTEGER NOT NULL,
    "storyId" INTEGER NOT NULL,

    CONSTRAINT "IdentityStory_pkey" PRIMARY KEY ("identityId","storyId")
);

-- CreateTable
CREATE TABLE "Intersectionality" (
    "id" SERIAL NOT NULL,
    "intersectionality" VARCHAR(50) NOT NULL,

    CONSTRAINT "Intersectionality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IntersectionalityStory" (
    "intersectionalityId" INTEGER NOT NULL,
    "storyId" INTEGER NOT NULL,

    CONSTRAINT "IntersectionalityStory_pkey" PRIMARY KEY ("intersectionalityId","storyId")
);

-- CreateTable
CREATE TABLE "Length" (
    "id" SERIAL NOT NULL,
    "length" VARCHAR(20) NOT NULL,
    "shortLength" VARCHAR(3) NOT NULL,

    CONSTRAINT "Length_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prominance" (
    "id" SERIAL NOT NULL,
    "prominance" VARCHAR(10) NOT NULL,

    CONSTRAINT "Prominance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Romantic" (
    "id" SERIAL NOT NULL,
    "romantic" VARCHAR(20) NOT NULL,

    CONSTRAINT "Romantic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Series" (
    "id" SERIAL NOT NULL,
    "series" VARCHAR(100) NOT NULL,
    "storygraph" VARCHAR(255) NOT NULL,
    "goodreads" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,

    CONSTRAINT "Series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sexuality" (
    "id" SERIAL NOT NULL,
    "sexuality" VARCHAR(20) NOT NULL,

    CONSTRAINT "Sexuality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Source" (
    "id" SERIAL NOT NULL,
    "source" VARCHAR(100) NOT NULL,
    "storygraph" VARCHAR(255) NOT NULL,
    "goodreads" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,

    CONSTRAINT "Source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SourceStory" (
    "sourceId" INTEGER NOT NULL,
    "storyId" INTEGER NOT NULL,

    CONSTRAINT "SourceStory_pkey" PRIMARY KEY ("sourceId","storyId")
);

-- CreateTable
CREATE TABLE "Story" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "authorId" INTEGER NOT NULL,
    "link" VARCHAR(255),
    "description" TEXT NOT NULL,
    "intersectionalityDetail" VARCHAR(255),
    "seriesId" INTEGER,
    "lengthId" INTEGER,

    CONSTRAINT "Story_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Warning" (
    "id" SERIAL NOT NULL,
    "warning" VARCHAR(30) NOT NULL,

    CONSTRAINT "Warning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WarningStory" (
    "warningId" INTEGER NOT NULL,
    "storyId" INTEGER NOT NULL,

    CONSTRAINT "WarningStory_pkey" PRIMARY KEY ("warningId","storyId")
);

-- AddForeignKey
ALTER TABLE "GenreStory" ADD CONSTRAINT "GenreStory_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GenreStory" ADD CONSTRAINT "GenreStory_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Identity" ADD CONSTRAINT "Identity_romanticId_fkey" FOREIGN KEY ("romanticId") REFERENCES "Romantic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Identity" ADD CONSTRAINT "Identity_sexualityId_fkey" FOREIGN KEY ("sexualityId") REFERENCES "Sexuality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Identity" ADD CONSTRAINT "Identity_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "Gender"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Identity" ADD CONSTRAINT "Identity_explicitId_fkey" FOREIGN KEY ("explicitId") REFERENCES "Explicit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Identity" ADD CONSTRAINT "Identity_prominanceId_fkey" FOREIGN KEY ("prominanceId") REFERENCES "Prominance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IdentityStory" ADD CONSTRAINT "IdentityStory_identityId_fkey" FOREIGN KEY ("identityId") REFERENCES "Identity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IdentityStory" ADD CONSTRAINT "IdentityStory_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntersectionalityStory" ADD CONSTRAINT "IntersectionalityStory_intersectionalityId_fkey" FOREIGN KEY ("intersectionalityId") REFERENCES "Intersectionality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntersectionalityStory" ADD CONSTRAINT "IntersectionalityStory_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SourceStory" ADD CONSTRAINT "SourceStory_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SourceStory" ADD CONSTRAINT "SourceStory_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Story" ADD CONSTRAINT "Story_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Story" ADD CONSTRAINT "Story_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Series"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Story" ADD CONSTRAINT "Story_lengthId_fkey" FOREIGN KEY ("lengthId") REFERENCES "Length"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarningStory" ADD CONSTRAINT "WarningStory_warningId_fkey" FOREIGN KEY ("warningId") REFERENCES "Warning"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarningStory" ADD CONSTRAINT "WarningStory_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
