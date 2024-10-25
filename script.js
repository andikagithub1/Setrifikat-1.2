$(document).ready(function() {
    $('#certificateForm').on('submit', function(e) {
        e.preventDefault();
        
        // Ambil nilai dari form
        const name = $('#name').val();
        const tournament = $('#tournament').val();
        const rank = $('#rank').val();

        // Tampilkan pratinjau data
        $('#previewName').text(name);
        $('#previewTournament').text(tournament);
        $('#previewRank').text(rank);
        $('#dataList').fadeIn(1000); // Efek fade-in untuk pratinjau data

        // Generate PDF Sertifikat
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Desain Sertifikat untuk Turnamen
        doc.setFontSize(22);
        doc.text("Penghargaan Juara Turnamen", 20, 30);
        doc.setFontSize(16);
        doc.text("Diberikan kepada:", 20, 50);
        doc.setFontSize(18);
        doc.text(name, 20, 70);
        doc.setFontSize(16);
        doc.text(`Sebagai ${rank} dalam ${tournament}`, 20, 90);
        doc.text("Tanggal: " + new Date().toLocaleDateString(), 20, 110);
        
        // Simpan PDF
        doc.save('sertifikat_turnamen.pdf');

        // Tampilkan pratinjau dengan animasi piala setelah unduhan
        $('#userName').text(name);
        $('#certificatePreview').fadeIn(1000); // Efek animasi fade-in
        $('.trophy-icon').fadeIn(1500); // Animasi muncul ikon piala

        // Tambahkan kelas 'certificate-created' untuk efek CSS
        $('#certificateContainer').addClass('certificate-created');
    });
});
