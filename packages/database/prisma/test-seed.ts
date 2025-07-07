import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.culturalObject.deleteMany();

  await prisma.culturalObject.createMany({
    data: [
  {
    "title": "Illo Odio",
    "description": "Distinctio animi cum molestias ratione impedit illum eligendi optio ut."
  },
  {
    "title": "Corrupti Excepturi",
    "description": "Fugit harum doloribus commodi."
  },
  {
    "title": "Ut Minima",
    "description": "Consequuntur fugiat labore cupiditate nemo."
  },
  {
    "title": "Ex Corrupti",
    "description": "Cum ipsa placeat sint."
  },
  {
    "title": "Nisi Similique",
    "description": "Dolor non est officia quae ex sed quibusdam sit animi aliquid dignissimos aliquid."
  },
  {
    "title": "A At",
    "description": "Vitae reprehenderit vel repudiandae magni illo sapiente."
  },
  {
    "title": "Sapiente Rem",
    "description": "Explicabo illum dolorem blanditiis."
  },
  {
    "title": "Impedit Similique",
    "description": "Ab a aliquam corrupti consequatur hic nisi sit ex veritatis tenetur saepe."
  },
  {
    "title": "Eos Magni",
    "description": "Inventore delectus tenetur sequi ab fugiat libero sunt eum laboriosam numquam possimus consequatur ipsum asperiores."
  },
  {
    "title": "Eum Magni",
    "description": "Minus deserunt aliquam labore aut enim suscipit accusamus culpa provident veniam."
  },
  {
    "title": "Rem Eaque",
    "description": "Quo magnam veritatis explicabo excepturi nulla."
  },
  {
    "title": "Non Maxime",
    "description": "Adipisci quae exercitationem nisi quas temporibus error quo repudiandae autem."
  },
  {
    "title": "Ratione Aperiam",
    "description": "Cupiditate quod ex exercitationem aut rem rem doloremque."
  },
  {
    "title": "Accusantium Sed",
    "description": "Id porro molestias id accusamus velit impedit tempora sint ipsam."
  },
  {
    "title": "Debitis Non",
    "description": "Consequatur debitis ipsum aspernatur reiciendis molestias minus pariatur."
  },
  {
    "title": "Architecto Accusantium",
    "description": "Soluta maxime voluptate dolores dolore quod quia reprehenderit tempore asperiores rem praesentium aliquid fugiat."
  },
  {
    "title": "Officia Sunt",
    "description": "Enim repellendus nesciunt quod minima recusandae."
  },
  {
    "title": "Repudiandae Expedita",
    "description": "Odio consectetur corporis ad soluta atque asperiores aut."
  },
  {
    "title": "Laboriosam In",
    "description": "Quia odit quidem alias voluptatem ipsam architecto sequi qui."
  },
  {
    "title": "Accusantium Quia",
    "description": "Dolorem dignissimos nulla optio soluta tempore occaecati optio."
  },
  {
    "title": "Eius Id",
    "description": "Hic corrupti a esse fugit repellendus qui consectetur assumenda."
  },
  {
    "title": "Itaque Quae",
    "description": "Adipisci error cumque asperiores quidem ipsum ad hic numquam doloremque distinctio doloribus aliquam."
  },
  {
    "title": "Labore Dolores",
    "description": "Quas eveniet consequuntur cum."
  },
  {
    "title": "Iste Molestiae",
    "description": "Alias veritatis dolor consequatur nam."
  },
  {
    "title": "Voluptatum Assumenda",
    "description": "Velit amet dolores architecto cupiditate harum fuga aut voluptatibus libero officiis minima."
  },
  {
    "title": "Veniam Soluta",
    "description": "Totam dolor in cupiditate hic reprehenderit repellendus autem hic tenetur eaque."
  },
  {
    "title": "Consequuntur Nobis",
    "description": "Impedit nisi vitae unde eum voluptatibus eligendi quas harum quae eligendi."
  },
  {
    "title": "Quidem Earum",
    "description": "Assumenda unde iste dolor itaque magni."
  },
  {
    "title": "Accusamus Odio",
    "description": "Fugiat nesciunt accusamus omnis doloremque quam dicta molestiae minus."
  },
  {
    "title": "Officiis Cumque",
    "description": "Dolor excepturi quia suscipit maiores exercitationem voluptatum."
  },
  {
    "title": "Fuga Nulla",
    "description": "Cumque assumenda ullam quas corrupti vel asperiores tempore."
  },
  {
    "title": "Nesciunt Quas",
    "description": "Repellat velit rerum impedit dolore quasi hic nam rem dolorum modi."
  },
  {
    "title": "Ab Quia",
    "description": "Cumque velit eligendi odio labore minima dignissimos autem."
  },
  {
    "title": "Fugiat Laudantium",
    "description": "Laborum id dignissimos totam occaecati maiores voluptatem pariatur fuga accusantium hic quas ea repellat inventore."
  },
  {
    "title": "Officiis Itaque",
    "description": "Enim cupiditate soluta esse."
  },
  {
    "title": "Tempore Vel",
    "description": "Perferendis nisi quo fuga."
  },
  {
    "title": "Ea Nemo",
    "description": "Doloribus quibusdam eligendi pariatur qui qui aliquam accusamus ipsam."
  },
  {
    "title": "Quas Earum",
    "description": "Recusandae quidem at doloremque tempore ratione quaerat dicta pariatur."
  },
  {
    "title": "Delectus Ducimus",
    "description": "Quas similique aliquam voluptatem eum architecto."
  },
  {
    "title": "Harum Repellat",
    "description": "Eveniet cupiditate magni provident."
  },
  {
    "title": "Atque Corrupti",
    "description": "Doloremque quam repudiandae eligendi eum."
  },
  {
    "title": "Labore Sit",
    "description": "Fuga provident quas tempore accusantium tenetur."
  },
  {
    "title": "Maiores Fugiat",
    "description": "Porro et ipsam cumque dignissimos provident aut quidem soluta."
  },
  {
    "title": "Doloremque Placeat",
    "description": "Tenetur unde iure atque."
  },
  {
    "title": "Odit Sapiente",
    "description": "Ipsam vitae minus harum asperiores esse."
  },
  {
    "title": "Hic Asperiores",
    "description": "Voluptas iure quidem nostrum soluta voluptates sint."
  },
  {
    "title": "Animi Asperiores",
    "description": "Ex odit sequi voluptas consequuntur incidunt natus magni."
  },
  {
    "title": "Perspiciatis Repellendus",
    "description": "Inventore eveniet officia modi quae ducimus quas quisquam mollitia."
  },
  {
    "title": "Aliquam Architecto",
    "description": "Asperiores quo cupiditate et."
  },
  {
    "title": "Commodi Quaerat",
    "description": "Dolore ducimus vel esse error asperiores repellat occaecati ipsum."
  },
  {
    "title": "Magni Eos",
    "description": "Placeat hic error eaque sint quasi iure ratione vero illo repellat minima unde."
  },
  {
    "title": "Sint Perferendis",
    "description": "Inventore vitae sit ex mollitia odit molestiae."
  },
  {
    "title": "Rerum Cum",
    "description": "Atque voluptatum in officiis libero eaque ipsam fugit quas numquam sed."
  },
  {
    "title": "Ipsa Aut",
    "description": "Distinctio libero consequuntur animi harum assumenda temporibus tempore placeat."
  },
  {
    "title": "Adipisci Autem",
    "description": "Ipsum excepturi nostrum tenetur id."
  },
  {
    "title": "Odio Quam",
    "description": "Fugit fugiat magnam voluptas."
  },
  {
    "title": "Ab Repudiandae",
    "description": "Quam harum possimus animi et iure voluptate reprehenderit culpa."
  },
  {
    "title": "Officiis Qui",
    "description": "Placeat atque rem dolorum occaecati alias ullam."
  },
  {
    "title": "Perspiciatis Eaque",
    "description": "Consectetur quasi maxime perspiciatis reiciendis nisi aperiam maxime accusamus laborum blanditiis alias blanditiis."
  },
  {
    "title": "Enim Repellat",
    "description": "Minus excepturi placeat eligendi repudiandae dolorum."
  },
  {
    "title": "Corrupti Ab",
    "description": "Ratione sunt praesentium eligendi provident adipisci magni ipsa quidem dolore praesentium aut aspernatur."
  },
  {
    "title": "Ipsam Error",
    "description": "Dolores error dicta architecto deleniti esse."
  },
  {
    "title": "Repellendus Et",
    "description": "Aliquam magni animi necessitatibus expedita autem explicabo sed occaecati aspernatur."
  },
  {
    "title": "Nihil Autem",
    "description": "Labore nostrum id id nostrum hic ipsam ipsum iusto iusto ratione eveniet tempore libero."
  },
  {
    "title": "Ad Ducimus",
    "description": "Libero eius praesentium officiis fuga voluptates harum odio."
  },
  {
    "title": "Velit Sit",
    "description": "Recusandae aliquam illo officiis deserunt explicabo eum cupiditate."
  },
  {
    "title": "Placeat Excepturi",
    "description": "Eligendi fugiat laborum sed aliquam."
  },
  {
    "title": "Cumque Qui",
    "description": "Ab illo sint sed quia."
  },
  {
    "title": "Ea Rem",
    "description": "Excepturi hic expedita illum recusandae quas temporibus commodi."
  },
  {
    "title": "Rem Quae",
    "description": "Fugit sequi ipsum voluptatibus eveniet similique perferendis quis at minima quod placeat aspernatur voluptate."
  },
  {
    "title": "Illo Atque",
    "description": "Sunt at nulla dignissimos ullam suscipit."
  },
  {
    "title": "Veritatis Ab",
    "description": "Quos dolor blanditiis odit."
  },
  {
    "title": "Praesentium Temporibus",
    "description": "Veniam ipsam eius recusandae voluptatum quod dignissimos in repellendus dolor."
  },
  {
    "title": "Distinctio Fugiat",
    "description": "Dolorem sit id vel dicta assumenda deleniti."
  },
  {
    "title": "Labore Vitae",
    "description": "Ratione atque sit aliquam suscipit saepe esse corporis consectetur atque id sed."
  },
  {
    "title": "Eligendi Fugit",
    "description": "Delectus necessitatibus optio in quos nesciunt enim voluptatum qui."
  },
  {
    "title": "Inventore Enim",
    "description": "Provident ab soluta voluptate illo tempore molestiae placeat animi corporis saepe nesciunt."
  },
  {
    "title": "Ipsa Sequi",
    "description": "Incidunt nostrum excepturi corrupti officia officia et."
  },
  {
    "title": "Vero Facilis",
    "description": "Nam non quisquam magni quasi recusandae sapiente rerum excepturi eaque."
  },
  {
    "title": "Corporis Ullam",
    "description": "Rem rem laudantium numquam explicabo qui possimus repudiandae officiis."
  },
  {
    "title": "Quisquam Et",
    "description": "Vel nesciunt incidunt eius illo enim."
  },
  {
    "title": "Possimus Sed",
    "description": "Veniam porro consectetur aliquid debitis qui possimus non reprehenderit optio."
  },
  {
    "title": "Iure Nisi",
    "description": "Possimus tenetur id consequuntur excepturi."
  },
  {
    "title": "Adipisci Laborum",
    "description": "Rem unde maiores amet nam."
  },
  {
    "title": "Optio Nemo",
    "description": "Placeat vitae ut praesentium."
  },
  {
    "title": "Accusamus Nobis",
    "description": "Enim praesentium rerum praesentium voluptatum consequatur accusantium."
  },
  {
    "title": "Molestiae Ab",
    "description": "Velit eius enim dolorem delectus tempora sit mollitia."
  },
  {
    "title": "Cum Laudantium",
    "description": "Quo aliquam officiis aliquid odio soluta totam quaerat provident non nostrum."
  },
  {
    "title": "Illum Doloremque",
    "description": "Id accusamus accusamus exercitationem consequatur voluptatibus ut esse dolore aut."
  },
  {
    "title": "Ab Repudiandae",
    "description": "Fuga rem a ad aliquam modi doloremque."
  },
  {
    "title": "Nobis Unde",
    "description": "Autem temporibus tempora rerum facere quibusdam."
  },
  {
    "title": "Culpa Magnam",
    "description": "Ullam deserunt rem culpa sunt nostrum."
  },
  {
    "title": "Atque Accusamus",
    "description": "Natus maxime debitis sed vitae eaque quisquam."
  },
  {
    "title": "Debitis Soluta",
    "description": "Incidunt debitis quam veniam laborum nam qui assumenda blanditiis."
  },
  {
    "title": "Nam Dolorem",
    "description": "Qui praesentium ipsa dicta dolores et officiis quasi."
  },
  {
    "title": "Saepe Delectus",
    "description": "Voluptatem ipsa facere ut ipsum esse dignissimos corrupti architecto quas."
  },
  {
    "title": "Pariatur Ea",
    "description": "Quibusdam error quia doloremque nobis ex vero laudantium odit accusantium."
  },
  {
    "title": "Cum Nesciunt",
    "description": "Voluptatem praesentium amet nam rem similique voluptate."
  },
  {
    "title": "Repellendus Vero",
    "description": "Consequuntur voluptatem quam quasi possimus explicabo dolor laudantium rem suscipit."
  },
  {
    "title": "Laboriosam Voluptatibus",
    "description": "Quam et enim sunt quasi exercitationem ut dolore."
  },
  {
    "title": "Quo Asperiores",
    "description": "Ducimus consequatur aspernatur perspiciatis quod."
  },
  {
    "title": "Laboriosam Fugit",
    "description": "Totam quod assumenda officia consequatur accusamus dicta."
  },
  {
    "title": "Ratione Dolorum",
    "description": "Dolores numquam facere at officia suscipit officiis."
  },
  {
    "title": "Doloribus Dolor",
    "description": "Nostrum dicta vitae officia assumenda reiciendis eum autem architecto maxime cum."
  },
  {
    "title": "Numquam Ad",
    "description": "Eveniet at ipsum minima ad blanditiis."
  },
  {
    "title": "Ratione Eveniet",
    "description": "Repellendus sapiente facere eveniet laudantium numquam voluptatum perferendis deserunt eligendi."
  },
  {
    "title": "Itaque Impedit",
    "description": "Aut accusantium temporibus ex."
  },
  {
    "title": "Dicta Quis",
    "description": "Sequi cum voluptatem iste iure eveniet occaecati perspiciatis earum."
  },
  {
    "title": "Dolor Ad",
    "description": "Itaque quo corrupti laboriosam libero natus reiciendis itaque placeat blanditiis."
  },
  {
    "title": "Fugit Quis",
    "description": "Quam neque iusto fugit vero."
  },
  {
    "title": "Aliquid Totam",
    "description": "Reprehenderit debitis temporibus enim vel quis quisquam modi similique aliquam."
  },
  {
    "title": "Voluptatum Quia",
    "description": "Accusantium eveniet aut facere sed temporibus iusto."
  },
  {
    "title": "Ullam Voluptates",
    "description": "Reiciendis quisquam perspiciatis repellat iusto distinctio adipisci laboriosam cupiditate veritatis saepe."
  },
  {
    "title": "Facere Beatae",
    "description": "Fuga exercitationem enim sunt autem."
  },
  {
    "title": "Nemo Recusandae",
    "description": "Vitae veniam quam quae mollitia aut accusantium corrupti eos a quaerat."
  },
  {
    "title": "Voluptatum Iste",
    "description": "Praesentium veritatis fuga quo perferendis."
  },
  {
    "title": "Eveniet Officiis",
    "description": "Voluptatibus et cum quis cum voluptatem."
  },
  {
    "title": "Ratione Modi",
    "description": "Assumenda modi quaerat quae mollitia labore facere rerum libero."
  },
  {
    "title": "Earum Totam",
    "description": "Illum vitae quos tempora consectetur odit enim vitae nihil dignissimos."
  },
  {
    "title": "Reiciendis Commodi",
    "description": "Esse dolore atque pariatur consectetur."
  },
  {
    "title": "Et Laboriosam",
    "description": "Soluta iure nesciunt eligendi numquam a ab nesciunt nostrum."
  },
  {
    "title": "Ab Pariatur",
    "description": "Magni blanditiis tenetur sapiente nulla quaerat."
  },
  {
    "title": "Esse Eveniet",
    "description": "Animi necessitatibus expedita quibusdam aliquid distinctio ipsa magni rem quasi aspernatur voluptate."
  },
  {
    "title": "Aut Natus",
    "description": "Aspernatur facilis harum in eius reiciendis at."
  },
  {
    "title": "Quis Nostrum",
    "description": "Nostrum pariatur expedita at aperiam voluptatibus aspernatur."
  },
  {
    "title": "Id Aut",
    "description": "Natus illum earum quisquam accusamus atque."
  },
  {
    "title": "Dolor Nemo",
    "description": "Ratione voluptatibus velit earum porro."
  },
  {
    "title": "Necessitatibus Debitis",
    "description": "At natus commodi quae saepe cumque totam voluptatum fuga maiores deleniti blanditiis suscipit rerum deleniti non."
  },
  {
    "title": "Vero Eaque",
    "description": "Natus nostrum non veniam rerum aliquam."
  },
  {
    "title": "Quo Iure",
    "description": "Perferendis explicabo voluptatem mollitia voluptatibus enim delectus maiores."
  },
  {
    "title": "Quis A",
    "description": "Eum necessitatibus incidunt aperiam aliquam nesciunt."
  },
  {
    "title": "Odit Voluptas",
    "description": "Blanditiis odio mollitia quo praesentium tempora minus saepe reiciendis aspernatur."
  },
  {
    "title": "Labore Sint",
    "description": "Dolores eum temporibus magnam earum dolorem perspiciatis dolorum nobis accusamus maxime."
  },
  {
    "title": "Praesentium Eum",
    "description": "Quaerat eum iste in recusandae vel."
  },
  {
    "title": "Incidunt Excepturi",
    "description": "Hic impedit maiores excepturi quia reprehenderit distinctio voluptas dolores."
  },
  {
    "title": "Quas Facilis",
    "description": "Aut sapiente quasi eum quaerat aut eaque asperiores."
  },
  {
    "title": "Saepe Quas",
    "description": "Amet tempora facilis impedit sed doloribus ducimus quas molestias."
  },
  {
    "title": "Eaque Porro",
    "description": "Odit quasi excepturi perferendis ratione cum."
  },
  {
    "title": "Asperiores Ratione",
    "description": "Adipisci eligendi quae mollitia facilis ea sunt placeat natus."
  },
  {
    "title": "Saepe Maiores",
    "description": "Officiis veniam repellendus expedita voluptates odit commodi omnis esse."
  },
  {
    "title": "Placeat Eos",
    "description": "Molestiae ut excepturi ex sunt commodi nihil voluptas."
  },
  {
    "title": "Quia Dicta",
    "description": "Consectetur aliquam provident fugit soluta quibusdam odio occaecati."
  },
  {
    "title": "Animi Voluptas",
    "description": "At consequatur rerum sapiente aspernatur voluptatibus."
  },
  {
    "title": "Nulla Sed",
    "description": "Nobis odit eveniet voluptas consectetur nobis."
  },
  {
    "title": "Id Voluptas",
    "description": "Itaque accusamus facere iusto repudiandae eaque perferendis fuga voluptates unde esse."
  },
  {
    "title": "Magnam Est",
    "description": "Nisi rerum labore."
  },
  {
    "title": "Consectetur Odit",
    "description": "Quod voluptatum sint fuga quibusdam culpa voluptatibus quisquam neque ab."
  },
  {
    "title": "Veniam Voluptate",
    "description": "Saepe vero harum quisquam modi."
  },
  {
    "title": "Quos Et",
    "description": "Voluptate provident porro eligendi et ipsa error a sunt temporibus quidem iste placeat."
  },
  {
    "title": "Distinctio Unde",
    "description": "Placeat dolorum facilis veniam inventore ex."
  },
  {
    "title": "Suscipit Labore",
    "description": "Dolore voluptate at nulla ex commodi error quaerat corporis deleniti."
  },
  {
    "title": "Aut Corrupti",
    "description": "A fugit iste quam numquam porro voluptatem sint commodi maiores exercitationem tenetur."
  },
  {
    "title": "Corrupti Alias",
    "description": "Libero ea corrupti."
  },
  {
    "title": "Qui Maiores",
    "description": "Magni suscipit dolore corporis praesentium ut nulla suscipit illum architecto deleniti quibusdam."
  },
  {
    "title": "Omnis Deserunt",
    "description": "Repellat eum vel minima mollitia eveniet dolorum rem amet explicabo."
  },
  {
    "title": "Sapiente Voluptatem",
    "description": "Aut similique amet nam distinctio quidem voluptates temporibus libero deleniti vel facilis ab."
  },
  {
    "title": "Libero Est",
    "description": "Fugit quos officia tempora adipisci perspiciatis consequuntur enim quae."
  },
  {
    "title": "Perspiciatis Debitis",
    "description": "Ut praesentium minus a voluptatibus ipsum at excepturi quo."
  },
  {
    "title": "Commodi Architecto",
    "description": "Quidem adipisci animi et qui doloribus dicta aut culpa minus."
  },
  {
    "title": "Officiis Fugiat",
    "description": "Nemo aliquid quisquam praesentium quod voluptatum aut itaque."
  },
  {
    "title": "Ex Corporis",
    "description": "Laboriosam omnis asperiores ipsum enim unde praesentium quaerat."
  },
  {
    "title": "Fugit Facere",
    "description": "Alias in quo iure eveniet nihil expedita."
  },
  {
    "title": "Officia Quidem",
    "description": "Impedit porro recusandae vero placeat quasi vitae id mollitia."
  },
  {
    "title": "Deserunt Quisquam",
    "description": "Pariatur porro dolores deleniti aliquid eius dolores tenetur porro voluptatibus."
  },
  {
    "title": "Modi Quia",
    "description": "Eveniet mollitia non dicta provident consequatur similique adipisci impedit eius repellat exercitationem magni."
  },
  {
    "title": "Optio Labore",
    "description": "Saepe saepe suscipit odio voluptates vel eius."
  },
  {
    "title": "Consequuntur Voluptate",
    "description": "Totam cum possimus illo repellat."
  },
  {
    "title": "Quia Cum",
    "description": "Minus adipisci saepe consequatur quae laboriosam odio occaecati eveniet."
  },
  {
    "title": "Amet Dolorum",
    "description": "Delectus beatae odio aperiam laudantium animi minus exercitationem."
  },
  {
    "title": "Quae Commodi",
    "description": "Ea voluptas laborum ducimus soluta facilis distinctio blanditiis."
  },
  {
    "title": "Amet Quis",
    "description": "Vel non enim."
  },
  {
    "title": "Nulla Ipsum",
    "description": "Alias sunt architecto laborum beatae excepturi vero ad sequi corporis."
  },
  {
    "title": "Ipsa Tenetur",
    "description": "Voluptates error quasi."
  },
  {
    "title": "Fuga Facere",
    "description": "Fugiat aliquam accusantium cum unde quaerat rerum quod qui officiis consectetur ex."
  },
  {
    "title": "Provident Accusantium",
    "description": "Quaerat voluptate magni ipsam architecto unde optio."
  },
  {
    "title": "Reprehenderit Nam",
    "description": "Quos iste ex dicta minus explicabo."
  },
  {
    "title": "Sapiente Corrupti",
    "description": "Ex voluptatibus vitae repellendus corrupti ipsa."
  },
  {
    "title": "Molestiae Quam",
    "description": "Recusandae qui ducimus eligendi dignissimos ex assumenda sapiente esse aliquam."
  },
  {
    "title": "Voluptatem Excepturi",
    "description": "Dolore veniam adipisci dignissimos cumque esse magnam odio amet temporibus totam occaecati dolorem dolore voluptate."
  },
  {
    "title": "Exercitationem Quam",
    "description": "Suscipit omnis unde exercitationem maxime doloremque alias quam asperiores laudantium totam iure necessitatibus dolores."
  },
  {
    "title": "Quidem Illum",
    "description": "Harum aliquid non saepe dolorem vel."
  },
  {
    "title": "Iusto Sed",
    "description": "Hic est hic laborum aspernatur maiores eligendi officia molestias."
  },
  {
    "title": "Sint Voluptas",
    "description": "Maxime occaecati voluptatum velit nulla recusandae possimus aliquam."
  },
  {
    "title": "Amet Aliquam",
    "description": "Excepturi rerum debitis voluptatem porro numquam natus consequatur eaque libero voluptatem distinctio."
  },
  {
    "title": "Laudantium Voluptate",
    "description": "Blanditiis quia ex eveniet quam."
  },
  {
    "title": "Ipsum Possimus",
    "description": "Iste dolorem amet minima."
  },
  {
    "title": "Quia Recusandae",
    "description": "Reiciendis velit corrupti corporis quae tempora soluta."
  },
  {
    "title": "Earum Numquam",
    "description": "Placeat qui deserunt dicta laborum laboriosam impedit nisi aut eaque repellat."
  },
  {
    "title": "Vitae Fugit",
    "description": "Dolore odit vero nulla amet ex."
  },
  {
    "title": "Ipsa Reiciendis",
    "description": "Soluta officiis veritatis natus fuga aliquam est ducimus perferendis laudantium."
  },
  {
    "title": "Porro Ipsa",
    "description": "Ducimus eveniet ex doloremque fugiat excepturi."
  },
  {
    "title": "Tempore Dignissimos",
    "description": "Dignissimos temporibus nulla ad in aut molestiae officiis ducimus vero."
  },
  {
    "title": "Temporibus Nesciunt",
    "description": "Sint mollitia perspiciatis quas labore blanditiis quidem necessitatibus."
  },
  {
    "title": "Illo Asperiores",
    "description": "Consequuntur magnam libero consectetur iure dolore repellendus pariatur ullam quia corrupti necessitatibus."
  },
  {
    "title": "Incidunt Eveniet",
    "description": "Sed incidunt quisquam officiis unde odit optio."
  },
  {
    "title": "Nam Quidem",
    "description": "Odio quasi accusantium sint modi et."
  },
  {
    "title": "Quisquam Similique",
    "description": "Incidunt aperiam reiciendis in."
  },
  {
    "title": "Ullam Eligendi",
    "description": "Tenetur nam unde distinctio fuga magnam."
  },
  {
    "title": "Asperiores Blanditiis",
    "description": "Commodi doloremque hic quidem consectetur ullam vitae."
  },
  {
    "title": "Doloribus Id",
    "description": "Saepe numquam adipisci earum excepturi natus at quasi dolores eum culpa nostrum eaque architecto."
  }
    ],
  });

  console.log('Seed abgeschlossen.');
}

main()
  .catch((e) => {
    console.error('Fehler beim Seeding:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());