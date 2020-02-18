const pangram = require('../main/pangram')

test ("if sentence is 'Abcdefghijklmnopqrstuvwxyz' and return true", () => {
    expect(pangram('Abcdefghijklmnopqrstuvwxyz')).toBe(true);
});

test ("if sentence is 'a quick movement of the enemy will jeopardize five gunboats' and return false", () => {
    expect(pangram('a quick movement of the enemy will jeopardize five gunboats')).toBe(false);
});

test ("if sentence is 'Pack my box with five dozen liquor jugs' and return true", () => {
    expect(pangram('Pack my box with five dozen liquor jugs')).toBe(true);
});

test ("if sentence is 'five boxing wizards jump quickly at it' and return false", () => {
    expect(pangram('five boxing wizards jump quickly at it')).toBe(false);
});

test ("if sentence is '7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog' and return false", () => {
    expect(pangram('7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog')).toBe(false);
});

test ("if sentence is 'The_quick_brown_fox_jumps_over_the_lazy_dog' and return false", () => {
    expect(pangram('The_quick_brown_fox_jumps_over_the_lazy_dog')).toBe(true);
});

test ("if sentence is 'Five quacking Zephyrs jolt my wax bed.' and return false", () => {
    expect(pangram('"Five quacking Zephyrs jolt my wax bed."')).toBe(true);
});

test ("if sentence is so long and return false because not pangram", () => {
    expect(pangram('Jakarta-Pernikahan Bunga Citra Lestari(BCL)dan Ashraf Sinclair selama 11 tahun jauh dari gosip.Di mata BCL,Ashraf adalah suami yang romantis.BCL menikah dengan Ashraf Sinclair pada 2008 silam dengan menggelar pesta di dua negara,Indonesia dan Malaysia.Dalam wawancara dengan detikHot pada tahun 2016 lalu,BCL mengaku kalah romantis dibanding Ashraf.Gue nggak romantis orangnya, gue perempuan yang nggak romantis sama sekali, bener-bener apa ya...Ashraf ini ya bintangnya juga romantis,ujar BCL kala itu.Baca juga:Kemesraan Ashraf Sinclair dan BCL yang Dipisahkan oleh Maut Pertemuan mereka terjadi ketika Bunga tengah melakukan interview dengan salah satu program televisi di Malaysia,dan Ashraf saat itu sebagai pembawa acara.Menurut Bunga,Ashraf romantis hingga ke hal-hal kecil.Bapaknya kan bule, the way dia treat perempuan itu yang masih kalau duduk itu tarikin kursi, bukain pintu. Aku nggak ngomomg masalah bule atau nggak ya, memang bapaknya men-treat ibunya seperti itu, jadi anaknya begitu,jelasnya dengan wajah bahagia.Kebiasaan sang suami memang bukan hal yang dibikin-bikin selama 8 tahun pernikahan mereka.Bagi Bunga sendiri,seorang wanita memang berhak untuk menerima sesuatu yang romantis dari pasangannya.Jadi aku ngeliat, oh di zaman begini masih loh bukain pintu segala macem. Sampai sekarang, ya sampai nikah 8 tahun dia memang udah kebiasaannya begitu. Bukan karena dia ingin mengikat tapi karena emang begitulah dia, perempuan melihat di-treatnya harus seperti itu,kata BCL.Baca juga:Sebelum Ashraf Sinclair Meninggal,BCL NyanyikanSoulmate Kini,hal-hal romantis itu tinggal kenangan.Ashraf Sinclair meninggal dunia pada dini hari tadi di usia 40 tahun.Dia diduga mengalami serangan jantung.')).toBe(false);
});

test ("if sentence is so long and return true because it's a pangram", () => {
    expect(pangram('Abcdefghijklmnopqrstuvwxyz Jakarta-Pernikahan Bunga Citra Lestari(BCL)dan Ashraf Sinclair selama 11 tahun jauh dari gosip.Di mata BCL,Ashraf adalah suami yang romantis.BCL menikah dengan Ashraf Sinclair pada 2008 silam dengan menggelar pesta di dua negara,Indonesia dan Malaysia.Dalam wawancara dengan detikHot pada tahun 2016 lalu,BCL mengaku kalah romantis dibanding Ashraf.Gue nggak romantis orangnya, gue perempuan yang nggak romantis sama sekali, bener-bener apa ya...Ashraf ini ya bintangnya juga romantis,ujar BCL kala itu.Baca juga:Kemesraan Ashraf Sinclair dan BCL yang Dipisahkan oleh Maut Pertemuan mereka terjadi ketika Bunga tengah melakukan interview dengan salah satu program televisi di Malaysia,dan Ashraf saat itu sebagai pembawa acara.Menurut Bunga,Ashraf romantis hingga ke hal-hal kecil.Bapaknya kan bule, the way dia treat perempuan itu yang masih kalau duduk itu tarikin kursi, bukain pintu. Aku nggak ngomomg masalah bule atau nggak ya, memang bapaknya men-treat ibunya seperti itu, jadi anaknya begitu,jelasnya dengan wajah bahagia.Kebiasaan sang suami memang bukan hal yang dibikin-bikin selama 8 tahun pernikahan mereka.Bagi Bunga sendiri,seorang wanita memang berhak untuk menerima sesuatu yang romantis dari pasangannya.Jadi aku ngeliat, oh di zaman begini masih loh bukain pintu segala macem. Sampai sekarang, ya sampai nikah 8 tahun dia memang udah kebiasaannya begitu. Bukan karena dia ingin mengikat tapi karena emang begitulah dia, perempuan melihat di-treatnya harus seperti itu,kata BCL.Baca juga:Sebelum Ashraf Sinclair Meninggal,BCL NyanyikanSoulmate Kini,hal-hal romantis itu tinggal kenangan.Ashraf Sinclair meninggal dunia pada dini hari tadi di usia 40 tahun.Dia diduga mengalami serangan jantung.')).toBe(true);
});